class Inventory < ApplicationRecord
  has_many :metas, class_name: 'Meta'
  belongs_to :category

end
