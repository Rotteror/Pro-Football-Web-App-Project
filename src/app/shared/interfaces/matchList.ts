// matches: { type: Array, required: true, default: [] },
// betsDay: { type: String, required: [true, 'Please enter Date for this Match List'] },
// createdAt: { type: Date, default: Date.now }

export interface IMatchList {
    matches: any,
    betsDay: string,
    createdAt: string,
}
