import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


// (3) [{…}, {…}, {…}]
// 0:
// country: "United Kingdom"
// lat: 51.52
// localtime: "2022-03-19 4:23"
// localtime_epoch: 1647663801
// lon: -0.11
// name: "London"
// region: "City of London, Greater London"
// tz_id: "Europe/London"
// [[Prototype]]: Object
// 1:
// cloud: 0
// condition: {text: 'Clear', icon: '//cdn.weatherapi.com/weather/64x64/night/113.png', code: 1000}
// feelslike_c: 5
// feelslike_f: 41.1
// gust_kph: 29.5
// gust_mph: 18.3
// humidity: 81
// is_day: 0
// last_updated: "2022-03-19 04:15"
// last_updated_epoch: 1647663300
// precip_in: 0
// precip_mm: 0
// pressure_in: 30.71
// pressure_mb: 1040
// temp_c: 8
// temp_f: 46.4
// uv: 1
// vis_km: 10
// vis_miles: 6
// wind_degree: 70
// wind_dir: "ENE"
// wind_kph: 11.2
// wind_mph: 6.9
// [[Prototype]]: Object
// 2:
// forecastday: Array(3)
// 0: {date: '2022-03-19', date_epoch: 1647648000, day: {…}, astro: {…}, hour: Array(24)}
// 1: {date: '2022-03-20', date_epoch: 1647734400, day: {…}, astro: {…}, hour: Array(24)}
// 2: {date: '2022-03-21', date_epoch: 1647820800, day: {…}, astro: {…}, hour: Array(24)}
// length: 3
// [[Prototype]]: Array(0)
// [[Prototype]]: Object