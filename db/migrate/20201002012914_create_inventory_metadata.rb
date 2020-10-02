class CreateInventoryMetadata < ActiveRecord::Migration[6.0]
  def change
    create_table :inventory_metadata do |t|
      t.string :key, null: false
      t.string :value
      
      t.timestamps
    end
  end
end
