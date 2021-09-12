import { render } from '@testing-library/vue'
import Input from './Input.vue'

const props = {
  label: 'INPUT_LABEL',
  icon: 'user',
  description: 'INPUT_DESCRIPTION',
  alignment: 'right',
}

describe('Input', () => {
  test('should render input properly', async () => {
    const { queryByTestId, queryByText } = render(Input, { props })

    const wrapper = queryByTestId('input')
    const input = queryByTestId('input-component')
    const label = queryByText(props.label)
    const description = queryByText(props.description)

    expect(wrapper).toBeInTheDocument()
    expect(wrapper).toHaveClass('mag-input--md')
    expect(wrapper).toHaveClass('mag-input--align-right')
    expect(label).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(input).toBeInTheDocument()
  })
})
