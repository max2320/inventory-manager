module Types
  class QueryType < Types::BaseObject
    field :inventories, [Types::InventoryType], null: true

    def inventories
      ::Inventory.all
    end


    field :categories, [Types::CategoryType], null: true

    def categories
      ::Category.all
    end
  end
end
