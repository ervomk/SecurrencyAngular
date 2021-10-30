import {SvcPaginationPipe} from "./pagination.pipe";

describe('SvcPaginationPipe', () => {
  it('create an instance', () => {
    const pipe = new SvcPaginationPipe();
    expect(pipe).toBeTruthy();
  });

  it('create check pipe logic', () => {
    const pipe = new SvcPaginationPipe();
    expect(pipe.transform([1,2,3,4,5,6,7], 2, 2)).toEqual([3,4]);
  });
});
