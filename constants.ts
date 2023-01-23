import process from "process";

const development: boolean = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

export default function isDev(): boolean
{
    return development;
}

export const BaseUrl = isDev() ? "https://nightlife-back.herokuapp.com/api/v1/" : "https://nightlife-back.herokuapp.com/api/v1/"