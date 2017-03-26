import React from 'react/addons'
import ReactTangleResult from '../lib/react-tangle-result.jsx'

describe('ReactTangleResult', function () {
  var component

  beforeEach(function () {
    component = React.addons.TestUtils.renderIntoDocument(
      <ReactTangleResult value={1} />
    )
  })

  it('should render', function () {
    expect(component.getDOMNode().className).toEqual('tangle-result')
  })
})
