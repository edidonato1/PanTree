class User < ApplicationRecord
  has_secure_password

  validates :username, presence: true, uniqueness: true
  validates :password, length: {minimum: 6}

  has_one :pantry
  has_many :lists
  has_many :foods

  def return_data 
    {
      id: id,
      username: username,
      lists: lists,
      pantry: pantry,
      dark_mode: dark_mode
    }
  end

end
