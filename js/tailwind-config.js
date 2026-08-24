// Palet & token mengikuti .claude/Design.md — jangan gunakan warna biru.
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FDC937',
          hover: '#E6B425',
          tint: '#FFF4CC',
        },
        navy: {
          DEFAULT: '#272E3F',
          light: '#323A4F',
          deep: '#1C2333',
          border: '#3D4560',
        },
        gray: {
          50: '#F5F5F5',
          100: '#E0E0E0',
          400: '#A0A8BC',
          600: '#666666',
          900: '#1A1A1A',
        },
        danger: '#FF3B30',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
};
