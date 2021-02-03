class User < ApplicationRecord
  has_secure_password

  validates :username, presence: true, uniqueness: true
  validates :password, length: {minimum: 6}

  has_one :pantry
  has_many :lists
  has_many :foods
end
