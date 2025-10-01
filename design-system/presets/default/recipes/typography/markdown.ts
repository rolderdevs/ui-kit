import { defineRecipe } from '@pandacss/dev';

export const markdown = defineRecipe({
  className: 'markdown',
  description: 'Markdown component',
  base: {
    // Main container spacing
    '& > * + *': {
      marginTop: '4',
    },

    // Typography - headings
    '& h1': {
      marginTop: '6',
      marginBottom: '2',
      fontWeight: 'semibold',
      fontSize: '3xl',
    },

    '& h2': {
      marginTop: '6',
      marginBottom: '2',
      fontWeight: 'semibold',
      fontSize: '2xl',
    },

    '& h3': {
      marginTop: '6',
      marginBottom: '2',
      fontWeight: 'semibold',
      fontSize: 'xl',
    },

    '& h4': {
      marginTop: '6',
      marginBottom: '2',
      fontWeight: 'semibold',
      fontSize: 'lg',
    },

    '& h5': {
      marginTop: '6',
      marginBottom: '2',
      fontWeight: 'semibold',
      fontSize: 'md',
    },

    '& h6': {
      marginTop: '6',
      marginBottom: '2',
      fontWeight: 'semibold',
      fontSize: 'sm',
    },

    // Typography - lists
    '& ol': {
      marginLeft: '4',
      listStylePosition: 'outside',
      listStyleType: 'decimal',
      whiteSpace: 'normal',
    },

    '& ul': {
      marginLeft: '4',
      listStylePosition: 'outside',
      listStyleType: 'disc',
      whiteSpace: 'normal',
    },

    '& li': {
      paddingY: '1',
    },

    // Typography - text formatting
    '& strong': {
      fontWeight: 'semibold',
    },

    '& a': {
      wordWrap: 'anywhere',
      fontWeight: 'medium',
      color: 'primary',
      textDecoration: 'underline',

      '&[data-incomplete="true"]': {
        opacity: '0.6',
      },
    },

    '& hr': {
      marginY: '6',
      borderColor: 'border',
    },

    '& blockquote': {
      marginY: '4',
      borderLeft: '4px solid',
      borderLeftColor: 'text.muted/30',
      paddingLeft: '4',
      color: 'text.muted',
      fontStyle: 'italic',
    },

    // Typography - inline code
    '& code': {
      borderRadius: 'xs',
      backgroundColor: 'bg',
      paddingX: '1.5',
      paddingY: '0.5',
      fontFamily: 'mono',
      fontSize: 'sm',
    },

    // Typography - superscript and subscript
    '& sup': {
      fontSize: 'sm',
    },

    '& sub': {
      fontSize: 'sm',
    },

    // Code blocks
    '& [data-code-block-container]': {
      marginY: '4',
      width: 'full',
      overflow: 'hidden',
      borderRadius: 'xl',
      border: '1px solid',
      borderColor: 'border',
    },

    '& [data-code-block-header]': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: 'bg/80',
      padding: '3',
      color: 'text.muted',
      fontSize: 'xs',

      '& span': {
        marginLeft: '1',
        fontFamily: 'mono',
        textTransform: 'lowercase',
      },

      '& > div': {
        display: 'flex',
        alignItems: 'center',
        gap: '2',
      },

      '& button': {
        cursor: 'pointer',
        padding: '1',
        color: 'text.muted',
        transition: 'all',
        border: 'none',
        background: 'transparent',

        '&:hover': {
          color: 'text',
        },
      },
    },

    '& [data-code-block] pre': {
      overflowX: 'auto',
      fontFamily: 'mono',
      fontSize: 'xs',
      padding: '4',
      backgroundColor: 'bg/40',
      borderTopWidth: '1px',
      borderTopColor: 'border',
    },

    // Tables
    '& [data-streamdown="table-wrapper"]': {
      marginY: '4',
      display: 'flex',
      flexDirection: 'column',
      gap: '2',

      '& > div:first-child': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: '1',

        '& button': {
          cursor: 'pointer',
          padding: '1',
          color: 'text.muted',
          transition: 'all',
          border: 'none',
          background: 'transparent',

          '&:hover': {
            color: 'text',
          },
        },
      },

      '& > div:last-child': {
        overflowX: 'auto',
      },
    },

    '& table': {
      width: 'full',
      borderCollapse: 'collapse',
      border: '1px solid',
      borderColor: 'border',
    },

    '& thead': {
      backgroundColor: 'bg/80',
    },

    '& tbody': {
      backgroundColor: 'bg/40',

      '& tr:not(:last-child)': {
        borderBottomWidth: '1px',
        borderBottomColor: 'border',
      },
    },

    '& tr': {
      borderBottomWidth: '1px',
      borderBottomColor: 'border',
    },

    '& th': {
      whiteSpace: 'nowrap',
      paddingX: '4',
      paddingY: '2',
      textAlign: 'left',
      fontWeight: 'semibold',
      fontSize: 'sm',
    },

    '& td': {
      paddingX: '4',
      paddingY: '2',
      fontSize: 'sm',
    },

    // Table dropdown menu
    '& .relative > div[class*="absolute"]': {
      position: 'absolute',
      top: '100%',
      right: '0',
      zIndex: '10',
      marginTop: '1',
      minWidth: '120px',
      borderRadius: 'md',
      border: '1px solid',
      borderColor: 'border',
      backgroundColor: 'bg.brighter',
      boxShadow: 'default',

      '& button': {
        width: '100%',
        paddingX: '3',
        paddingY: '2',
        textAlign: 'left',
        fontSize: 'sm',
        transition: 'colors',
        cursor: 'pointer',
        border: 'none',
        background: 'transparent',

        '&:hover': {
          backgroundColor: 'bg/40',
        },
      },
    },

    // Images
    '& [data-streamdown="image-wrapper"]': {
      position: 'relative',
      marginY: '4',
      display: 'inline-block',

      '&:hover': {
        '& > div:first-of-type': {
          display: 'block',
        },

        '& > button': {
          opacity: '1',
        },
      },

      '& > div:first-of-type': {
        pointerEvents: 'none',
        position: 'absolute',
        inset: '0',
        display: 'none',
        borderRadius: 'lg',
        backgroundColor: 'black/10',
      },

      '& > button': {
        position: 'absolute',
        right: '2',
        bottom: '2',
        display: 'flex',
        height: '8',
        width: '8',
        cursor: 'pointer',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 'md',
        border: '1px solid',
        borderColor: 'border',
        backgroundColor: 'bg.brighter/90',
        boxShadow: 'low',
        backdropFilter: 'blur(8px)',
        transition: 'all',
        transitionDuration: '200',
        opacity: '0',

        '&:hover': {
          backgroundColor: 'bg.brighter',
        },
      },

      '& img': {
        maxWidth: 'full',
        borderRadius: 'lg',
      },
    },

    // Mermaid diagrams
    '& [data-streamdown="mermaid-block"]': {
      position: 'relative',
      marginY: '4',
      height: 'auto',
      borderRadius: 'xl',
      border: '1px solid',
      borderColor: 'border',
      padding: '4',

      '& > div:first-child': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: '2',

        '& button': {
          cursor: 'pointer',
          padding: '1',
          color: 'text.muted',
          transition: 'all',
          border: 'none',
          background: 'transparent',

          '&:hover': {
            color: 'text',
          },
        },
      },

      '& > div:last-child': {
        marginY: '4',
        display: 'flex',
        justifyContent: 'center',
      },
    },

    // Mermaid loading state
    '& .flex.items-center.space-x-2.text-muted-foreground': {
      display: 'flex',
      alignItems: 'center',
      gap: '2',
      color: 'text.muted',

      '& .h-4.w-4.animate-spin.rounded-full.border-current.border-b-2': {
        height: '4',
        width: '4',
        animation: 'spin',
        borderRadius: 'full',
        borderColor: 'currentColor',
        borderBottomWidth: '2px',
      },

      '& .text-sm': {
        fontSize: 'sm',
      },
    },

    // Mermaid error state
    '& .rounded-lg.border.border-red-200.bg-red-50.p-4': {
      borderRadius: 'lg',
      border: '1px solid',
      borderColor: 'redApple.200',
      backgroundColor: 'redApple.50',
      padding: '4',

      '& .font-mono.text-red-700.text-sm': {
        fontFamily: 'mono',
        color: 'redApple.700',
        fontSize: 'sm',
      },

      '& .mt-2': {
        marginTop: '2',
      },

      '& .cursor-pointer.text-red-600.text-xs': {
        cursor: 'pointer',
        color: 'redApple.600',
        fontSize: 'xs',
      },

      '& .mt-2.overflow-x-auto.rounded.bg-red-100.p-2.text-red-800.text-xs': {
        marginTop: '2',
        overflowX: 'auto',
        borderRadius: 'sm',
        backgroundColor: 'redApple.100',
        padding: '2',
        color: 'redApple.800',
        fontSize: 'xs',
      },
    },
  },
});
