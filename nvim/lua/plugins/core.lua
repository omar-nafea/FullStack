-- ~/.config/nvim/lua/plugins/core.lua
return {
  -- LSP Configuration
  {
    'neovim/nvim-lspconfig',
    dependencies = {
      -- Mason makes it easy to install and manage LSPs, formatters, and linters
      'williamboman/mason.nvim',
      'williamboman/mason-lspconfig.nvim',
    },
    config = function()
      -- This setup function will be called once Mason is ready
      require('mason').setup()
      require('mason-lspconfig').setup({
        -- A list of servers to automatically install if they're not already installed
        ensure_installed = { 'pylsp', 'lua_ls', 'tsserver' },
      })

      local lspconfig = require('lspconfig')
      local capabilities = require('cmp_nvim_lsp').default_capabilities()

      -- Set up each language server
      -- The settings below are just examples; you can customize them
      require('mason-lspconfig').setup_handlers({
        function(server_name) -- Default handler
          lspconfig[server_name].setup({
            capabilities = capabilities,
          })
        end,
        ['lua_ls'] = function() -- Custom handler for lua_ls
          lspconfig.lua_ls.setup({
            capabilities = capabilities,
            settings = {
              Lua = {
                diagnostics = {
                  globals = { 'vim' },
                },
              },
            },
          })
        end,
      })
    end,
  },

  -- Autocompletion Engine
  {
    'hrsh7th/nvim-cmp',
    dependencies = {
      'hrsh7th/cmp-nvim-lsp', -- Source for LSP
      'hrsh7th/cmp-buffer',   -- Source for text in current buffer
      'L3MON4D3/LuaSnip',     -- Snippet engine
      'saadparwaiz1/cmp_luasnip', -- Snippet source for nvim-cmp
    },
    config = function()
      local cmp = require('cmp')
      local luasnip = require('luasnip')

      cmp.setup({
        snippet = {
          expand = function(args)
            luasnip.lsp_expand(args.body)
          end,
        },
        -- Keybindings for completion
        mapping = cmp.mapping.preset.insert({
          ['<C-k>'] = cmp.mapping.select_prev_item(),
          ['<C-j>'] = cmp.mapping.select_next_item(),
          ['<C-b>'] = cmp.mapping.scroll_docs(-4),
          ['<C-f>'] = cmp.mapping.scroll_docs(4),
          ['<C-Space>'] = cmp.mapping.complete(),
          ['<C-e>'] = cmp.mapping.abort(),
          ['<CR>'] = cmp.mapping.confirm({ select = true }),
        }),
        -- Sources for completion
        sources = cmp.config.sources({
          { name = 'nvim_lsp' },
          { name = 'luasnip' },
          { name = 'buffer' },
        }),
      })
    end,
  },

  -- Better Syntax Highlighting
  {
    'nvim-treesitter/nvim-treesitter',
    build = ':TSUpdate',
    config = function()
      require('nvim-treesitter.configs').setup({
        -- A list of parser names, or "all"
        ensure_installed = { 'c', 'lua', 'vim', 'vimdoc', 'python', 'rust', 'javascript', 'typescript' },
        -- Install parsers synchronously (only applied to `ensure_installed`)
        sync_install = false,
        -- Automatically install missing parsers when entering buffer
        auto_install = true,
        highlight = {
          enable = true,
        },
      })
    end,
  },
  -- Add this new plugin for surrounding text
  -- In your plugins file where nvim-surround is configured
  {
    'kylechui/nvim-surround',
    version = '*',
    event = 'VeryLazy',
    config = function()
      require('nvim-surround').setup({
        -- Default keymaps work as expected
        keymaps = {
          normal = 'ys',
          normal_cur = 'yss',
          normal_line = 'yS',
          normal_cur_line = 'ySS',
          visual = 'S',
          visual_line = 'gS',
          delete = 'ds',
          change = 'cs',
          change_line = 'cS',
        },
      })
    end,
  },
}

