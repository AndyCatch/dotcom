import { includes } from './includes'

const frag = /* glsl */ `
#ifdef GL_ES
precision highp float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float seed;

varying vec2 v_texcoord;

// Separate GLSL funcs
${includes}

void main(void)
{
    // this means that 0,0 = bottom left, 1,1 = top right
    vec2 uv = v_texcoord;

    // Find the distance between the mouse and points
    vec2 mouse = u_mouse / u_resolution;
    float dist = distance(uv, mouse);
    float strength = smoothstep(0.90, 0.0, dist);
    
    float hue = u_time * 0.005 + seed;
    
    vec3 hsv1 = vec3(hue, 0.65, 0.45);
    vec3 hsv2 = vec3(hue + 0.07, 0.125, 0.125);
    
    vec3 rgb1 = hsv2rgb(hsv1);
    vec3 rgb2 = hsv2rgb(hsv2);
    
    vec4 color1 = vec4(rgb1, 1.0);
    vec4 color2 = vec4(rgb2, 1.0);
    
    // float grain = rand(uv);
    float grain = rand(100.0 * uv) * mix(0.2, 0.001, strength);
    
    // make movement for fbm
    vec2 movement = vec2(u_time * 0.01, u_time * -0.01);
    movement *= rotation2d(u_time * 0.005);
    
    float f = fbm(uv + movement + seed);
    f *= 20.0;
    f += grain;
    f += u_time * 0.225;
    f = fract(f);
    
    // mix colors based on noise pattern
    float gap = mix(0.5, 0.01, strength);
    float mixer = smoothstep(0.0, gap, f) - smoothstep(1.0 - gap, 1.0, f);
    
    vec4 color = mix(color1, color2, mixer);
    
    gl_FragColor = color;
}
`

export { frag }
