import NodeCache from 'node-cache'

type Key = string | number

class cacheLocal {
    private static _instance: cacheLocal

    private cache: NodeCache

    private constructor(ttlSeconds: number) {
        this.cache = new NodeCache({
            stdTTL: ttlSeconds,
            checkperiod: ttlSeconds * 0.2,
            useClones: false
        })
    }

    public static getInstance(): cacheLocal {
        if (!cacheLocal._instance) {
            cacheLocal._instance = new cacheLocal(10000)
        }
        return cacheLocal._instance
    }

    public get<T>(key: Key): T | undefined {
        return this.cache.get<T>(key)
    }

    public set<T>(key: Key, value: T): void {
        this.cache.set(key, value)
    }
}

export default cacheLocal.getInstance()