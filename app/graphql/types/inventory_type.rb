class Types::InventoryType < Types::BaseObject
  field :name, String, null: false

  field :category, Types::CategoryType, null: false

  field :metas, [Types::MetaType], null: true
end
