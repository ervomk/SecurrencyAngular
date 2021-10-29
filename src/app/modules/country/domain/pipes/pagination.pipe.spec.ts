import { PaginationPipe } from './pagination.pipe';

describe('PaginationPipe', () => {
  it('create an instance', () => {
    const pipe = new PaginationPipe();
    expect(pipe).toBeTruthy();
  });

  it('create check pipe logic', () => {
    const pipe = new PaginationPipe();
    expect(pipe.transform([1,2,3,4,5,6,7], 2, 2)).toEqual([3,4]);
  });
});
