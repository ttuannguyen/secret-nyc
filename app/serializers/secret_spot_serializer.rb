class SecretSpotSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :description, :cost

end
