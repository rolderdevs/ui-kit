/* Для чего нужны:
- Связывают рецепты с палитрой цветов. Это позволяет создавать новые темы, меняя только палитру.
- Задают стандарт использования цветов при разработке.
  Если разработчик следует ему, смена темы, опять же, просиходит простой заменой палитры.

Правила формирования семантических цветов
- Семантика выражена в 2-х наборах - общий и целевой.
- Целевой набор связывает рецепты с палитрой. Названия цветов получаются длинными, зато однозначными.
  Логика простая - прямая связь не дает запутатся.
- Общий набор используется разработчиком приложения. Здесь используются короткие названия для хорошего DX.
- Любое значение должно иметь условие _dark. Для этого в палитре цветов задан стандарт - любой цвет имеет вариант dark.

Такие правила позволяют добиться двух, противоречящих целей - стандартизовать и сделать разработку удобной.

*/

import { defineSemanticTokens } from '@pandacss/dev';

export default defineSemanticTokens({
  // **
  // Общий набор
  // **
  colors: {
    // По разному формируется для светлой и темной темы
    // В темной просто - чем выше слой, тем светлее
    // В светлой чуть иначе - body темнее, surface самый свелый, далее от него каждый слой темнее
    bg: {
      body: {
        value: {
          base: '{colors.gray.100}',
          _dark: '{colors.gray.dark.950}',
        },
      },
      // равен surface
      DEFAULT: {
        value: {
          base: '{colors.gray.50}',
          _dark: '{colors.gray.dark.900}',
        },
      },
      surface: {
        value: {
          base: '{colors.gray.50}',
          _dark: '{colors.gray.dark.900}',
        },
      },
      raised: {
        value: {
          base: '{colors.gray.100}',
          _dark: '{colors.gray.dark.800}',
        },
      },
      accent: {
        value: {
          base: '{colors.gray.200}',
          _dark: '{colors.gray.dark.700}',
        },
      },
      // Для разработчика, который решил сделать что-то кастомное в своем проекте
      brand: {
        body: {
          value: {
            base: '{colors.brand.50}',
            _dark: '{colors.brand.dark.950}',
          },
        },
        // равен surface
        DEFAULT: {
          value: {
            base: '{colors.brand.100}',
            _dark: '{colors.brand.dark.900}',
          },
        },
        surface: {
          value: {
            base: '{colors.brand.100}',
            _dark: '{colors.brand.dark.900}',
          },
        },
        raised: {
          value: {
            base: '{colors.brand.100}',
            _dark: '{colors.brand.dark.800}',
          },
        },
        accent: {
          value: {
            base: '{colors.brand.200}',
            _dark: '{colors.brand.dark.700}',
          },
        },
      },
    },
    text: {
      DEFAULT: {
        value: {
          base: '{colors.gray.900}',
          _dark: '{colors.gray.dark.100}',
        },
      },
      accent: {
        value: {
          base: '{colors.brand.500}',
          _dark: '{colors.brand.dark.500}',
        },
      },
      semimuted: {
        value: {
          base: '{colors.gray.600}',
          _dark: '{colors.gray.dark.400}',
        },
      },
      muted: {
        value: {
          base: '{colors.gray.400}',
          _dark: '{colors.gray.dark.600}',
        },
      },
    },
    border: {
      DEFAULT: {
        value: {
          base: '{colors.gray.200}',
          _dark: '{colors.gray.dark.700}',
        },
      },
    },
    // **
    // Набор для элементов
    // **
    icon: {
      fg: {
        DEFAULT: {
          value: {
            base: '{colors.gray.900}',
            _dark: '{colors.gray.dark.300}',
          },
        },
        disabled: {
          value: {
            base: '{colors.gray.400}',
            _dark: '{colors.gray.dark.600}',
          },
        },
      },
      bg: {
        hover: {
          value: {
            base: '{colors.gray.200}',
            _dark: '{colors.gray.dark.800}',
          },
        },
        active: {
          value: {
            base: '{colors.brand.100}',
            _dark: '{colors.brand.dark.800}',
          },
        },
        disabled: {
          value: {
            base: '{colors.gray.200}',
            _dark: '{colors.gray.dark.800}',
          },
        },
      },
    },
    button: {
      primary: {
        fg: {
          DEFAULT: {
            value: {
              base: '{colors.gray.50}',
              _dark: '{colors.gray.dark.100}',
            },
          },
          disabled: {
            value: {
              base: '{colors.gray.400}',
              _dark: '{colors.gray.dark.500}',
            },
          },
        },
        bg: {
          DEFAULT: {
            value: {
              base: '{colors.brand.500}',
              _dark: '{colors.brand.dark.800}',
            },
          },
          hover: {
            value: {
              base: '{colors.brand.700}',
              _dark: '{colors.brand.dark.700}',
            },
          },
          disabled: {
            value: {
              base: '{colors.gray.200}',
              _dark: '{colors.gray.dark.800}',
            },
          },
        },
      },
      secondary: {
        fg: {
          DEFAULT: {
            value: {
              base: '{colors.gray.900}',
              _dark: '{colors.gray.dark.100}',
            },
          },
          disabled: {
            value: {
              base: '{colors.gray.400}',
              _dark: '{colors.gray.dark.500}',
            },
          },
        },
        bg: {
          DEFAULT: {
            value: {
              base: '{colors.gray.200}',
              _dark: '{colors.gray.dark.800}',
            },
          },
          hover: {
            value: {
              base: '{colors.gray.400}',
              _dark: '{colors.gray.dark.700}',
            },
          },
          disabled: {
            value: {
              base: '{colors.gray.200}',
              _dark: '{colors.gray.dark.800}',
            },
          },
        },
      },
    },
    paper: {
      bg: {
        DEFAULT: {
          value: {
            base: '{colors.gray.50}',
            _dark: '{colors.gray.dark.900}',
          },
        },
      },
    },
  },
});
