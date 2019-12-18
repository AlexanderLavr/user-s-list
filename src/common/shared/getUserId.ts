export const getUserId = (id: string) => {
    let userId = Number(id.slice(2, ));
    return userId
}