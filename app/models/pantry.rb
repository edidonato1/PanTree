class Pantry < ApplicationRecord
  belongs_to :user
  has_many :groceries
end
