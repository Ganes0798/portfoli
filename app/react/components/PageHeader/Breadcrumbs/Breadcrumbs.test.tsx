import { render } from '@/react-tools/test-utils';

import { Breadcrumbs } from './Breadcrumbs';

test('should display a Breadcrumbs, breadcrumbs should be separated by >', async () => {
  const breadcrumbs = [
    { label: 'bread1' },
    { label: 'bread2' },
    { label: 'bread3' },
  ];
  const { container } = render(<Breadcrumbs breadcrumbs={breadcrumbs} />);

  expect(container.firstChild?.textContent).toEqual(
    breadcrumbs.map((b) => b.label).join('>')
  );
});
