from enum import Enum


class LLMModels(Enum):
    GPT35 = "GPT 3.5"
    GPT4 = "GPT 4"
    GEMINIPRO = "Gemini Pro"
    MISTRAL = "Mistral"
    LLAMA3 = "Llama 3"
    LLAMA2 = "Llama 2"
    CLAUDE3OPUS = "Claude 3 Opus"
    CLAUDE3SONNET = "Claude 3 Sonnet"
    CLAUDE3HAIKU = "Claude 3 Haiku"
    GEMMA = "Gemma"

    @classmethod
    def from_string(cls, string):
        for enum_member in cls:
            if enum_member.value == string:
                return enum_member
        raise ValueError("Invalid string: " + string)


class IMAGEModels(Enum):
    STABLEDIFFUSION = "Stable Diffusion"
    DALLE3 = "DALL-E 3"

    @classmethod
    def from_string(cls, string):
        for enum_member in cls:
            if enum_member.value == string:
                return enum_member
        raise ValueError("Invalid string: " + string)
