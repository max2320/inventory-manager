class CreateInventoryCategories < ActiveRecord::Migration[6.0]
  def change
    create_table :inventory_categories do |t|

      t.timestamps
    end
  end
end
