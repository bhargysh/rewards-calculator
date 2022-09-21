export const convertToUnixTime = (rawDateTime: string) => {
    try {
        return Math.floor((new Date(rawDateTime).getTime()) / 1000)
    } catch (error) {
        console.error(`Cannot convert ${rawDateTime} to unix timestamp`);
    }
}