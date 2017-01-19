// test what hooks are exposed

import { assert } from 'chai';
import hooks from '../../src';

const hookNames = [
  'callbackToPromise',
  'checkContext',
  'checkContextIf',
  'client',
  'combine',
  'debug',
  'deleteByDot',
  'dePopulate',
  'disable',
  'getByDot',
  'getItems',
  'getWithSlug',
  'isProvider',
  'legacyPopulate',
  'lowerCase',
  'modifyWithSlug',
  'populate',
  'pluck',
  'pluckQuery',
  'promiseToCallback',
  'remove',
  'removeQuery',
  'replaceItems',
  'serialize',
  'setByDot',
  'setCreatedAt',
  'setSlug',
  'setUpdatedAt',
  'softDelete',
  'traverse',
  'validate',
  'validateSchema',
  'iffElse',
  'iff',
  'when',
  'unless',
  'some',
  'every',
  'isNot'
].sort();

describe('services exposed hooks', () => {
  it('expected hooks are exposed', () => {

  });

  it('no unexpected hooks', () => {
    assert.deepEqual(
      Object.keys(hooks).sort(),
      hookNames
    );
  });
});
