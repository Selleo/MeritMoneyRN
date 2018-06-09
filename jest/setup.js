jest.mock('Animated', () => ({
  View: () => 'View',
  Text: () => 'Text',
  ScrollView: () => 'ScrollView',
  Value: jest.fn(() => ({ interpolate: jest.fn() })),
  event: jest.fn(),
  timing: jest.fn(() => ({ start: jest.fn() })),
  interpolate: jest.fn(),
}))

jest.mock('Linking', () => ({
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  openURL: jest.fn(),
  canOpenURL: jest.fn(),
  getInitialURL: jest.fn(),
}))

Date.now = jest.fn(() => new Date('2018-03-19T10:00:00.000'))

jest.mock('react-dom/server', () => {}, { virtual: true })

jest.mock('react-native-animatable', () => ({
  View: () => 'View',
}))
