type config = {
    key: string;
    value: any;
}

const config = [

] as config[];

export function setConfig(key: string,v: any) {
    config.push(
        {
            key: key,
            value: v
        }
    );
}

export function getConfig(setting: string) {
    return config.find((x: any) =>x.key==setting)!.value ? config.find((x: any) => x.key==setting)!.value : undefined
}