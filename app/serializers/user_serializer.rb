class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_many :visits
  has_many :secret_spots


end
