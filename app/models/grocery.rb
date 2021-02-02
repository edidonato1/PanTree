class Grocery < ApplicationRecord
  belongs_to :food
  belongs_to :list
end
