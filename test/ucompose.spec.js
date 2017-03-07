/* eslint-disable import/no-extraneous-dependencies*/
import { expect } from 'chai';
import ucompose from '../src/ucompose';

describe('`ucompose` module', () => {
  const f = x => x + 1;
  const g = x => x * x;
  const h = x => 2 - x;
  const indentity = x => x;

  it('computes the composition f(g(h)) of functions f,g and h', () => {
    const fgh = ucompose(h, g, f);
    expect(f(g(h(4)))).to.eql(fgh(4));
  });
  it('returns the identity function that returns the value of its non function argument', () => {
    expect(ucompose(2)(1)).to.eql(indentity(2));
    expect(ucompose(4)(1)).to.eql(indentity(4));
    expect(ucompose({ a: 1, d: 5 })(1)).to.eql(indentity({ a: 1, d: 5 }));
  });

  it('computes the composition of an array of functions', () => {
    const fghArr = ucompose([h, g, f]);
    const fgh = ucompose([h, g], [f]);
    expect(ucompose([4, fghArr])()).to.eql(fgh(4));
  });

  it('returns NOOP function when no function is passed as parameter', () => {
    const fghArr = ucompose();
    expect(fghArr(4)).to.eql(undefined);
  });
});
