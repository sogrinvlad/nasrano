class User < ApplicationRecord
  has_many :excrements, dependent: :destroy
end
