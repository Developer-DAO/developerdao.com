function testCommonLink(element: HTMLElement, linkAddress: string) {
  expect(element).toBeInTheDocument();
  expect(element.closest('a')).toHaveAttribute('href', linkAddress);
}

export default testCommonLink;
