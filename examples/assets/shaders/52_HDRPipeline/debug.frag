#version 450

layout (location = 0) in vec2 inUV0;

layout (binding  = 1) uniform sampler2D originTexture;

layout (location = 0) out vec4 outFragColor;

void main() 
{
    vec4 originColor = texture(originTexture, inUV0);
    outFragColor = vec4(originColor.x);
}