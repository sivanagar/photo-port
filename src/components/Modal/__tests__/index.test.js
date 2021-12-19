import React from 'react';
import { render, cleanup , fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';


const currentPhoto = {
  name: 'Park bench',
  category: 'landscape',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
  index: 1
};

const mockToggleModal = jest.fn();

afterEach(cleanup);

describe('Modal Component', () => {
  it('renders', () => {
    render(<Modal currentPhoto={currentPhoto} />)
  });
  it('matches snapshot DOM node stracture', ()=> {
    const { asFragment } = render(<Modal currentPhoto={currentPhoto} />);
    expect(asFragment()).toMatchSnapshot();
  });
  describe('Click Event', () => {
    it('calls onClose handler', () => {
      // Arrange: Render Modal
      const { getByText } = render(<Modal
        onClose={mockToggleModal}
        currentPhoto={currentPhoto}
      />);
      // Act: Simulate click event
      fireEvent.click(getByText('Close this modal'));
      // Assert: Expected matcher
      expect(mockToggleModal).toHaveBeenCalledTimes(1);
    });
  })  
})
