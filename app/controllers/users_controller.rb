class UsersController < ApplicationController
    def index
        render json: User.all
    end

    def show
        user = User.find_by(id: sessions[:user_id])
        if user 
            render json: user
        else
            render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    def create
        #
    end


    private
    def user_params
        params.permit(:username, :password, :password_confirmation)
    end

end
