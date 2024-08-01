import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        'steel-gray': {
          '50': '#f3f4fa',
          '100': '#eaeaf5',
          '200': '#d8d8ed',
          '300': '#c0c0e1',
          '400': '#aaa6d3',
          '500': '#978fc5',
          '600': '#8677b4',
          '700': '#73659d',
          '800': '#5d547f',
          '900': '#4e4867',
          '950': '#2b2738'
        },
        'blue-violet': {
          '50': '#f1f1fc',
          '100': '#e5e6fa',
          '200': '#d0d0f5',
          '300': '#b4b3ee',
          '400': '#9d94e5',
          '500': '#8979db',
          '600': '#7a5fcc',
          '700': '#6e54b5',
          '800': '#564291',
          '900': '#483b74',
          '950': '#2b2343'
        }
      },
      aspectRatio: {
        auto: 'auto',
        square: '1 / 1',
        video: '16 / 9'
      }
    }
  }
}
