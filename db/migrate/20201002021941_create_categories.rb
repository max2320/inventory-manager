class CreateCategories < ActiveRecord::Migration[6.0]
  def change
    create_table :categories do |t|
      t.string :name, null: false

      t.timestamps
    end

    add_column :inventories, :category_id, :integer
    add_foreign_key :inventories, :categories
  end
end
