-- ~/.config/nvim/lua/plugins/lsp.lua
return {
  {
    'neovim/nvim-lspconfig',
    dependencies = {
      'williamboman/mason.nvim', -- Easily installs LSPs
      'williamboman/mason-lspconfig.nvim',
      { 'folke/neodev.nvim', opts = {} }, -- For nvim lua development
    },
    config = function()
      local lspconfig = require('lspconfig')
      local capabilities = require('cmp_nvim_lsp').default_capabilities()

      -- Example: Configure Python LSP server
      -- Add a setup for each language server you have installed
      lspconfig.pylsp.setup {
        capabilities = capabilities,
      }
      -- Add other language servers here, e.g.:
      -- lspconfig.rust_analyzer.setup { capabilities = capabilities }
    end,
  },
  {
    'hrsh7th/nvim-cmp', -- Autocompletion engine
    dependencies = {
      'hrsh7th/cmp-nvim-lsp', -- Source for LSP completions
      'hrsh7th/cmp-buffer',   -- Source for buffer words
      'L3MON4D3/LuaSnip',     -- Snippet engine
      'saadparwaiz1/cmp_luasnip', -- Bridge for LuaSnip
    },
    config = function()
      local cmp = require('cmp')
      cmp.setup({
        snippet = {
          expand = function(args)
            require('luasnip').lsp_expand(args.body)
          end,
        },
        sources = cmp.config.sources({
          { name = 'nvim_lsp' },
          { name = 'luasnip' },
          { name = 'buffer' },
        }),
        mapping = cmp.mapping.preset.insert({
          ['<C-Space>'] = cmp.mapping.complete(),
          ['<CR>'] = cmp.mapping.confirm({ select = true }),
          ['<C-e>'] = cmp.mapping.abort(),
        }),
      })
    end,
  },
}
