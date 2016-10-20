/**
 * @jsdoc function
 * @createDate <%= pageName %>
 * @name <%= pageName %>
 * @description
 * `<%= pageName %>` entry file
 */

require('../pages/<%= pageName %>.scss');
require('../client-index')(require('../pages/<%= pageName %>'));
