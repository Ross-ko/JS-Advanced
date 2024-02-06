import {expect} from 'chai';
import { add } from '../app.js'

describe('Suite Demo', function() {
    it ('works', function() {
        expect(add(3, 7), 'Did not work').to.equal(9);
    });
});