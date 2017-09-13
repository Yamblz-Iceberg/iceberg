import { reducer, START_AUTH, STOP_AUTH } from './../../reducers/app.reducer';

describe('app reducer', () => {
    it('should return the initial state', () => {
        expect(
            reducer(undefined, {}),
        ).toEqual({ authInProgress: false });
    });

    it('should handle START_AUTH', () => {
        expect(
            reducer(undefined, { type: START_AUTH, payload: true }),
        ).toEqual({ authInProgress: true });
    });

    it('should handle STOP_AUTH', () => {
        expect(
            reducer({ authInProgress: true }, { type: STOP_AUTH, payload: false }),
        ).toEqual({ authInProgress: false });
    });
});
