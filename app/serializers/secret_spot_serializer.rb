class SecretSpotSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :description, :cost
  has_many :users

  def cost
    "$#{'%.2f' %object.cost}"
  end

end
