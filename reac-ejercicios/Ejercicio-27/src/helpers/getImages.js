
export const getImages = (size) => {
    const images = [
        "/lobo.svg",
        "/oso.svg",
        "/ave.svg",
        "/gato.svg",
        "/erizo.svg",
        "/jirafa.svg",
        "/Dog.svg",
        "/mariposa.svg",
        "/caballo.svg",
        "/elefante.svg"
    ]

    const newImages = images.slice(0, size);

    return newImages.flatMap(item => [`1|${item}`, `2|${item}`])
            .sort(() => Math.random() - 0.5)
        // 50% 0 - 0.5   0.4 - 0.5 -
        // 50% 0.5 - 1   0.7 - 0.5 +
} 