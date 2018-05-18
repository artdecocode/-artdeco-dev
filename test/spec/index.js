import { equal } from 'zoroaster/assert'
import context, { Context } from '../context' // eslint-disable-line no-unused-vars
import artdecoDev from '../../src'

/** @type {Object.<string, (ctx: Context)>} */
const T = {
  context,
  'is a function'() {
    equal(typeof artdecoDev, 'function')
  },
  async 'calls package without error'() {
    await artdecoDev()
  },
  async 'calls test context method'({ example }) {
    await example()
  },
}

export default T
