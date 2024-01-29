function generateSquare (n) {
    return Array(n)
        .fill('+'.repeat(n))
        .join('\n')
}
generateSquare(5)