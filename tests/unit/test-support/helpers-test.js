import testSelector from 'dummy/tests/helpers/ember-test-selectors';
import { module, test } from 'qunit';

module('test-support helpers');

test('expands a selector name and attribute value corretly', function(assert) {
  assert.equal(testSelector('selector', 'welcome-text'), '[data-test-selector="welcome-text"]');
});

test('expands a selector name without attribute value corretly', function(assert) {
  assert.equal(testSelector('selector'), '[data-test-selector]');
});
