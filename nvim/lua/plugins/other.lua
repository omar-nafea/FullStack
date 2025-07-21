-- ~/.config/nvim/lua/plugins/other.lua
return {
  {
    'nvim-treesitter/nvim-treesitter', -- Better syntax highlighting
    build = ':TSUpdate',
    config = function()
      require('nvim-treesitter.configs').setup({
        ensure_installed = { 'c', 'lua', 'vim', 'vimdoc', 'python' , 'typescript', 'php' , 'go', 'java' , 'javascript' },
        highlight = { enable = true },
      })
    end,
  },
  { 'lewis6991/gitsigns.nvim', opts = {} }, -- Git signs in the gutter
  { 'nvim-lualine/lualine.nvim', opts = {} }, -- Fancier statusline
}
