const hasTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;

var context = { hasTouch };

// Returns an array of strings parsed from two filenames like
// first : DSC00998.jpg
// last  : DSC01112.jpg
// by extracting the base name, the number (with or without leading zeros),
// the extension, etc.
// An optional step parameter can be passed; it defaults to 1.
// Returns an empty array and a warning in the console
// if the parsing wasn't successful.
function parse(first, last, every=1) {

	// The output array to populate
	const out = [];

	const a = last_number(first);
	if (a === "") {
		warn("the first filename doesn’t contain a number.");
		return out
	}

	const b = last_number(last);
	if (b === "") {
		warn("the last filename doesn’t contain a number.");
		return out
	}

	const before = basename_before(first, a);
	const after = basename_after(first, a);

	if (before !== basename_before(last, b) || after !== basename_after(last, b)) {
		warn("the base-names of '" + first + "' and '" + last + "' don’t match.");
		return out
	}

	const has_leading_zeroes = a.charAt(0) == 0 || b.charAt(0) == 0;
	if (has_leading_zeroes && a.length != b.length) {
		warn("wrong number of leading zeros.");
		return out
	}

	const num_a = parseInt(a);
	const num_b = parseInt(b);

	for (let i=num_a; i<=num_b; i+=every) {
		// Add leading zeroes, in case
		out.push(before + (i + "").padStart(a.length, "0") + after);
	}

	return out
}

// Returns the part of a string before the last found number
// Returns an empty string if no number is present
// basename_before('folder32/98.jpg') "folder32/"
// basename_before('abc.jpg') ""
function basename_before(filename, lastNum){
	//const r = new RegExp(`.+?(?=${lastNum})`, "g")
	const m = filename.match(new RegExp(`.*(?=${lastNum})`));
	if (m === null) return ""
	return m.join("")
}

// Returns the part of a string after the last found number
// Returns the string if no number is present
// This allows to reconstruct a valid filename width:
// basename_before() + last_number() + basename_after()
// even if non number is present.
// basename_after('folder32/98.jpg') ".jpg"
// basename_after('abc.jpg') "abc.jpg"
function basename_after(filename, lastNum){
	const m = filename.match(new RegExp(`[^${lastNum}]+$`));
	if (m === null) return ""
	return m[0]
}

// Returns the last positive number in a string (with leading zeros)
// Returns an empty string if no number is present
// last_number('folder32/98.jpg') "98"
// last_number('abc.jpg') ""
function last_number(filename) {
	const m = filename.match(/\d+(?!.*\d)/g);
	if (m === null) return ""
	return m[0]
}

function warn(msg) {
	console.warn("Can’t parse the file sequence correctly, returning [].\nReason: " + msg);
}

/**
 * Sequencer - A fast(?) fullscreen image-sequence player.
 * See README or visit github (link below) for details.
 * @copyright 2012-21
 * @version 3.0.1
 * @author Andreas Gysin
 *         https://ertdfgcvb.xyz
 *         https://github.com/ertdfgcvb/Sequencer
 */

const instances = [];

function make(cfg) {
	const s = new S(cfg);
	if (s !== false) instances.push(s);
	return s
}

class S{

	constructor(opts) {
		const defaults = {
			canvas           : null,
			list             : [],
			from             : '',
			to               : '',
			step             : 1,       // increment: to load only even images use 2, etc
			scaleMode        : 'cover', // as in CSS3, can be: auto, cover, contain
			direction        : 'x',     // mouse direction, can be x, -x, y, -y, applies only if playMode is 'drag' or 'hover'
			playMode         : 'drag',  // none, drag, hover, auto, autoHover    TODO: remove auto, add loop, pong, once
			loop             : 'loop',  // loop, pong or none         TODO: remove
			interval         : 0,       // interval in milliseconds between each frame, applies only if playMode is 'auto' or 'autoHover' (defaults to 1000 for 'autoHover')
			resumeDelay      : 0,       // ms to hold the current frame after the pointer leaves / finger lifts before autoplay resumes, applies only if playMode is 'autoHover'
			pauseOffscreen   : true,    // stops autoplay while the canvas is scrolled out of view, applies only if playMode is 'auto' or 'autoHover'
			autoLoad         : 'all',   // all, first, none: triggers the loading of the queue immediatly, can be disabled to be triggered in a different moment
			fitFirstImage    : false,   // resizes the canvas to the size of the first loaded image in the sequence
			showLoadedImages : false,   // don't display images while loading
			dragAmount       : 10,
			hiDPI            : true,    // use hiDPI canvas
			smoothing        : true,    // sets the context imageSmoothingEnabled flag
		};

		this.config = {...defaults, ...opts};

		if (this.config.from == '' && this.config.to == '' && this.config.list.length == 0) {
			console.error("Missing filenames.");
			return false
		}

		// create a default canvas in case none is added:
		if (this.config.canvas === null) {
			const c = document.createElement('canvas');
			document.body.appendChild(c);
			this.config.canvas = c;
			this.config.fitFirstImage = true;
		}

		this.pointer = {x:0, y:0, down:false};
		this.destroyed = false;
		this.cleanup = []; // teardown functions run by destroy()
		this.current = -1;
		this.images = [];
		this.directionSign = /-/.test(this.config.direction) ? -1 : 1;
		this.lastLoaded = -1;
		this.pongSign = 1;
		this.ctx = this.config.canvas.getContext('2d');
		// Take the provided list or build one with 'from' and 'to'
		this.list = this.config.list.length > 0 ?
					this.config.list :
					parse(this.config.from, this.config.to, this.config.step);

		this.size(this.ctx.canvas.width, this.ctx.canvas.height);

		if (this.config.autoLoad == 'first') {
			new Preloader(this.images, [this.list.shift()], imageLoad.bind(null, this));
		} else if (this.config.autoLoad == 'all') {
			this.load();
		}
	}

	load() {
		this.load = function() {
			console.log("load() can be called only once.");
		};

		new Preloader(this.images, this.list, imageLoad.bind(null, this), queueComplete.bind(null, this));
	}

	run() {
		const _move = context.hasTouch ? 'touchmove'  : 'mousemove';
		const _down = context.hasTouch ? 'touchstart' : 'mousedown';
		const _up   = context.hasTouch ? 'touchend'   : 'mouseup';

		if (this.config.playMode === 'hover') {
			listen(this, this.ctx.canvas, _move, absoluteMove.bind(null, this));
		} else if (this.config.playMode === 'drag') {
			listen(this, this.ctx.canvas, _move, relativeMove.bind(null, this));
			listen(this, this.ctx.canvas, _down, pointerDown.bind(null, this));
			listen(this, document, _up, pointerUp.bind(null, this));
		} else if (this.config.playMode === 'auto') {
			autoplay(this, this.config.interval);
		} else if (this.config.playMode === 'autoHover') {
			autoHover(this);
		}
	}

	// Stops playback, removes all listeners and forgets the instance.
	// The canvas itself is left in place (and keeps its last frame).
	destroy() {
		if (this.destroyed) return
		this.destroyed = true;
		this.cleanup.forEach(fn => fn());
		this.cleanup = [];
		const i = instances.indexOf(this);
		if (i !== -1) instances.splice(i, 1);
	}

	nextImage(loop) {
		if (!loop) loop = this.config.loop;
		if(loop === 'pong') {
			this.current += this.pongSign;
			if (this.current >= this.images.length-1) { //this.current could ev. change by other playmodes, so extra-checks are necessary
				this.pongSign = -1;
				this.current = this.images.length-1;
			} else if (this.current <= 0) {
				this.pongSign = 1;
				this.current = 0;
			}
			this.drawImage(this.current);
		} else {
			this.current = (this.current + 1) % this.images.length; //loop
			this.drawImage(this.current);
		}
	}

	drawImage(id) {
		if (id === undefined) id = this.current;
		if (id < 0 || id >= this.images.length) return
		const r = this.config.hiDPI ? window.devicePixelRatio : 1;
		const cw = this.ctx.canvas.width / r;
		const ch = this.ctx.canvas.height / r;
		const ca = cw / ch;
		const img = this.images[id];
		const ia = img.width / img.height;
		let iw, ih;

		if (this.config.scaleMode == 'cover') {
			if (ca > ia) {
				iw = cw;
				ih = iw / ia;
			} else {
				ih = ch;
				iw = ih * ia;
			}
		} else if (this.config.scaleMode == 'contain') {
			if (ca < ia) {
				iw = cw;
				ih = iw / ia;
			} else {
				ih = ch;
				iw = ih * ia;
			}
		} else { //this.config.scaleMode == 'auto'
			iw = img.width;
			ih = img.height;
		}

		const ox = (cw/2 - iw/2);
		const oy = (ch/2 - ih/2);

		this.ctx.save();
		this.ctx.scale(r, r);
		this.ctx.clearRect(0, 0, cw, ch);                       // Clear background to support images with alpha
		this.ctx.imageSmoothingEnabled = this.config.smoothing; // Needs to be set before draw?
		this.ctx.drawImage(img, 0, 0, img.width, img.height, Math.floor(ox), Math.floor(oy), Math.ceil(iw), Math.ceil(ih));
		this.ctx.restore();
	}

	size(w, h) {
		const r = this.config.hiDPI ? window.devicePixelRatio : 1;
		const c = this.ctx.canvas;
		c.width = w * r;
		c.height = h * r;
		c.style.width = w + 'px';
		c.style.height = h + 'px';
		this.drawImage();
	}
}

// -- Callback functions for the sequencer object -----------------------------------

function imageLoad(self, e) {
	if (self.destroyed) return
	if (e.id > self.lastLoaded && self.config.showLoadedImages) { // to not have a back and forward hickup… but some images will be skipped
		self.drawImage(e.id);
		self.lastLoaded = e.id;
	}

	if (typeof self.config.imageLoad === 'function' ) {
		e.sequencer = self;
		self.config.imageLoad(e);
	}

	if (typeof self.imageLoad === 'function' ) {
		e.sequencer = self;
		self.imageLoad(e);
	}

	// The canvas size is determined and set from the first image loaded:
	if (e.id === 0) {
		if(self.config.fitFirstImage) {
			self.size(e.img.width, e.img.height);
			self.config.fitFirstImage = false;
		}
		self.drawImage(0);
		self.current = 0; // TODO: could be better
	}
}

function queueComplete(self, e) {
	if (self.destroyed) return
	if (typeof self.config.queueComplete === 'function' ) {
		e.sequencer = self;
		self.config.queueComplete(e);
	}

	if (typeof self.queueComplete === 'function' ) {
		self.queueComplete(e);
	}

	self.run();
	if (!self.config.showLoadedImages && self.config.playMode !== 'none') {
		self.drawImage(0);
	}
}

function pointerDown(self, e) {
	let ox, oy;
	if (e.touches) {
		ox = e.touches[0].pageX - e.touches[0].target.offsetLeft;
		oy = e.touches[0].pageY - e.touches[0].target.offsetTop;
	} else {
		ox = e.offsetX;
		oy = e.offsetY;
	}

	self.pointer = {
		x    : ox,
		y    : oy,
		down : true,
		currentId : self.current // TODO: this is a hack and needs a better solution...
	};
}

function pointerUp(self, e) {
	self.pointer.down = false;
}

function relativeMove(self, e) {
	if (!self.pointer.down) return

	const t = self.images.length;

	let ox, oy;
	if (e.touches) {
		ox = e.touches[0].pageX - e.touches[0].target.offsetLeft;
		oy = e.touches[0].pageY - e.touches[0].target.offsetTop;
	} else {
		ox = e.offsetX;
		oy = e.offsetY;
	}

	let dist = 0;
	if (/x/.test(self.config.direction)) {
		dist = (ox - self.pointer.x) * self.directionSign;
	} else if (/y/.test(self.config.direction)) {
		dist = (oy - self.pointer.y) * self.directionSign;
	}

	let id = self.pointer.currentId + Math.floor(dist / self.config.dragAmount);
	if (id < 0) id = t - (-id % t);
	else if (id > t) id = id % t;

	if (id != self.current) {
		self.drawImage(id);
		self.current = id;
	}

	// remove bounce on mobile
	e.preventDefault();
}

function constrain(v, a, b){
	if (v < a) return a
	if (v > b) return b
	return v
}

function absoluteMove(self, e) {
	let ox, oy;
	if (e.touches) {
		ox = e.touches[0].pageX - e.touches[0].target.offsetLeft;
		oy = e.touches[0].pageY - e.touches[0].target.offsetTop;
	} else {
		ox = e.offsetX;
		oy = e.offsetY;
	}

	scrubTo(self, ox, oy);

	// remove bounce on mobile
	e.preventDefault();
}

// addEventListener that destroy() can undo
function listen(self, target, type, fn, opts) {
	target.addEventListener(type, fn, opts);
	self.cleanup.push(() => target.removeEventListener(type, fn, opts));
}

// Draws the frame matching a position (in CSS px) inside the canvas
function scrubTo(self, ox, oy) {
	const t = self.images.length;
	const r = self.config.hiDPI ? window.devicePixelRatio : 1;

	let m, w;
	if (self.config.direction == 'x') {
		w = self.ctx.canvas.width / r;
		m = ox;
	} else if (self.config.direction == '-x') {
		w = self.ctx.canvas.width / r;
		m = w - ox - 1;
	} else if (self.config.direction == 'y') {
		w = self.ctx.canvas.height / r;
		m = oy;
	} else if (self.config.direction == '-y') {
		w = self.ctx.canvas.height / r;
		m = w - oy - 1;
	}

	const id = constrain(Math.floor(m / w * t), 0, t - 1);
	if (id != self.current) {
		self.drawImage(id);
		self.current = id;
	}
}

// Advances a frame every `interval` ms. Returns a controller to pause/resume it.
// The rAF loop is fully stopped while paused or (optionally) off-screen.
function autoplay(self, interval) {
	let paused = false;
	let stopped = false;
	let visible = true;
	let rafId = null;
	let pt = 0;

	const tick = t => {
		if (t - pt >= interval) {
			self.nextImage();
			pt = t;
		}
		rafId = requestAnimationFrame(tick);
	};

	const update = () => {
		const shouldRun = visible && !paused && !stopped;
		if (shouldRun && rafId === null) {
			pt = performance.now(); // wait a full interval before the next frame
			rafId = requestAnimationFrame(tick);
		} else if (!shouldRun && rafId !== null) {
			cancelAnimationFrame(rafId);
			rafId = null;
		}
	};

	let observer = null;
	if (self.config.pauseOffscreen && 'IntersectionObserver' in window) {
		observer = new IntersectionObserver(entries => {
			visible = entries[0].isIntersecting;
			update();
		});
		observer.observe(self.ctx.canvas);
	}

	self.cleanup.push(() => {
		stopped = true;
		update();
		if (observer) observer.disconnect();
	});

	update();

	return {
		pause()  { paused = true;  update(); },
		resume() { paused = false; update(); }
	}
}

// Plays automatically; hovering (mouse) or swiping along `direction` (touch)
// pauses autoplay and scrubs like 'hover'. Autoplay resumes from the
// current frame on mouse leave / touch end, after `resumeDelay` ms.
function autoHover(self) {
	const canvas = self.ctx.canvas;
	const player = autoplay(self, self.config.interval || 1000);
	const scrubAxis = /x/.test(self.config.direction) ? 'x' : 'y';
	const LOCK_THRESHOLD = 6; // px of movement before deciding scrub vs. scroll
	let resumeTimer = null;
	let touch = null;

	// Let the browser scroll natively along the other axis
	const prevTouchAction = canvas.style.touchAction;
	canvas.style.touchAction = scrubAxis === 'x' ? 'pan-y pinch-zoom' : 'pan-x pinch-zoom';
	self.cleanup.push(() => {
		clearTimeout(resumeTimer);
		canvas.style.touchAction = prevTouchAction;
	});

	const pause = () => {
		clearTimeout(resumeTimer);
		player.pause();
	};

	const resume = delay => {
		clearTimeout(resumeTimer);
		if (delay > 0) resumeTimer = setTimeout(player.resume, delay);
		else player.resume();
	};

	const scrubFromClient = (clientX, clientY) => {
		const rect = canvas.getBoundingClientRect();
		scrubTo(self, clientX - rect.left, clientY - rect.top);
	};

	// Mouse (and pen). Pointer events are used so the compatibility mouse
	// events that follow a tap don't leave the sequence paused.
	listen(self, canvas, 'pointerenter', e => {
		if (e.pointerType !== 'touch') pause();
	});
	listen(self, canvas, 'pointermove', e => {
		if (e.pointerType !== 'touch') scrubFromClient(e.clientX, e.clientY);
	});
	listen(self, canvas, 'pointerleave', e => {
		if (e.pointerType !== 'touch') resume(self.config.resumeDelay);
	});

	// Touch: a tap or swipe pauses; a swipe along `direction` scrubs, a swipe
	// across it scrolls the page as normal.
	listen(self, canvas, 'touchstart', e => {
		const p = e.touches[0];
		touch = { x: p.clientX, y: p.clientY, axis: null };
		pause();
	}, { passive: true });

	listen(self, canvas, 'touchmove', e => {
		if (!touch) return
		const p = e.touches[0];
		if (touch.axis === null) {
			const dx = Math.abs(p.clientX - touch.x);
			const dy = Math.abs(p.clientY - touch.y);
			if (Math.max(dx, dy) < LOCK_THRESHOLD) return
			touch.axis = dx > dy ? 'x' : 'y';
		}
		if (touch.axis !== scrubAxis) return // page is scrolling
		if (e.cancelable) e.preventDefault();
		scrubFromClient(p.clientX, p.clientY);
	}, { passive: false });

	const touchEnd = () => {
		if (!touch) return
		// Scrolling past shouldn't hold the frame
		const scrolled = touch.axis !== null && touch.axis !== scrubAxis;
		touch = null;
		resume(scrolled ? 0 : self.config.resumeDelay);
	};
	listen(self, canvas, 'touchend', touchEnd);
	listen(self, canvas, 'touchcancel', touchEnd);
}

// TODO: break out in own module
function Preloader(arrayToPopulate, fileList, imageLoadCallback, queueCompleteCallbak) {
	const concurrentLoads = Math.min(fileList.length, 4);
	let current = arrayToPopulate.length - 1; // id: order in array
	let count = arrayToPopulate.length;       // count: count of image loaded... can be out of sync of id.
	for (let i=0; i<concurrentLoads; i++) loadNext();

	function loadNext() {
		if (current >= fileList.length -1) return
		current++;

		//console.log('Loading ' + fileList[current] + '...')
		const img = new Image();
		img.src = fileList[current]
		;(function(id) {    // TODO: fix
			img.onload = e => {
				if (typeof imageLoadCallback === 'function') imageLoadCallback({
					id    : id,
					img   : img,
					count : ++count,
					total : fileList.length
				});
				if (count < fileList.length ) {
					loadNext();
				}
				if (count == fileList.length) {
					if (typeof queueCompleteCallbak === 'function') queueCompleteCallbak({
						total : fileList.length
					});
				}
			};
			img.onerror = e => {
				console.error('Error with: ' + fileList[id]);
			};
		})(current);
		arrayToPopulate.push(img);
	}
}

var sequencer = {
	make,
	instances
};

export { sequencer };
