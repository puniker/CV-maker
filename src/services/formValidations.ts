
export const passwordMatch = (password: string, repeatPassword: string) => {
    if (password === repeatPassword) return true
    return false
}