-- ~/.config/nvim/lua/plugins/ui.lua
return {
  -- Fuzzy Finder (files, text, etc.)
  {
    'nvim-telescope/telescope.nvim',
    branch = '0.1.x',
    dependencies = { 'nvim-lua/plenary.nvim' },
  },

  -- File Explorer
  {
    'nvim-neo-tree/neo-tree.nvim',
    branch = 'v3.x',
    dependencies = {
      'nvim-lua/plenary.nvim',
      'nvim-tree/nvim-web-devicons', -- File icons
      'MunifTanjim/nui.nvim',
    },
    config = function()
      require('neo-tree').setup({
        window = {
          position = 'left',
          width = 30,
        },
      })
    end,
  },

  -- Git signs in the gutter
  { 'lewis6991/gitsigns.nvim', opts = {} },

  -- Statusline
  {
    'nvim-lualine/lualine.nvim',
    dependencies = { 'nvim-tree/nvim-web-devicons' },
    opts = {
      options = {
        theme = 'tokyonight', -- Set theme for lualine
        component_separators = '|',
        section_separators = '',
      },
    },
  },

  -- This is where the tokyonight theme goes
  {
    'folke/tokyonight.nvim',
    lazy = false, -- make sure we load this during startup
    priority = 1000, -- make sure to load this before all the other start plugins
    config = function()
      -- load the colorscheme here
      vim.cmd.colorscheme 'tokyonight'
    end,
  },
}
