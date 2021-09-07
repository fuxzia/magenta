import { render } from '@testing-library/vue'
import Button from './Button.vue'

const props = {
  label: 'TEST_BUTTON',
}

describe('Button', () => {
  test('should render properly', () => {
    const { queryByText } = render(Button, { props })

    expect(queryByText(props.label)).toBeInTheDocument()
  })
})
